use axum::Router;
use tower_http::services::ServeDir;
#[tokio::main]
async fn main() {
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    // let app = Router::new().route("/", get(|| async {}));
    let app = Router::new().nest_service("/", ServeDir::new("frontend"));
    axum::serve(listener, app).await.unwrap()
}
