package com.cosmochem.gateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
public class GatewayConfig {

    private String env(String key, String fallback) {
        return System.getenv().getOrDefault(key, fallback);
    }

    @Bean
    RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("auth", r -> r.path("/api/v1/auth/**", "/api/v1/users/**")
                .uri(env("AUTH_SERVICE_URL", "http://localhost:8081")))
            .route("products", r -> r.path("/api/v1/products/**")
                .uri(env("PRODUCT_SERVICE_URL", "http://localhost:8082")))
            .route("quotes", r -> r.path("/api/v1/quotes/**")
                .uri(env("QUOTE_SERVICE_URL", "http://localhost:8083")))
            .route("content", r -> r.path(
                    "/api/v1/careers/**", "/api/v1/gallery/**", "/api/v1/settings/**")
                .uri(env("CONTENT_SERVICE_URL", "http://localhost:8084")))
            .route("audit", r -> r.path(
                    "/api/v1/activities/**", "/api/v1/presence/**")
                .uri(env("AUDIT_SERVICE_URL", "http://localhost:8086")))
            .build();
    }

    @Bean
    CorsWebFilter corsWebFilter() {
        CorsConfiguration c = new CorsConfiguration();
        c.setAllowedOrigins(Arrays.stream(
                env("CORS_ALLOWED_ORIGINS", "http://localhost:5173").split(","))
                .map(String::trim).filter(s -> !s.isBlank()).toList());
        c.setAllowedMethods(List.of(
                HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name(),
                HttpMethod.PATCH.name(), HttpMethod.DELETE.name(), HttpMethod.OPTIONS.name()));
        c.addAllowedHeader("*");
        c.setAllowCredentials(true);
        c.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", c);
        return new CorsWebFilter(source);
    }
}