use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let address = "127.0.0.1:8080";

    let listener = TcpListener::bind(address).await.unwrap();
    println!("Server running on {}", address);

    let (tx, mut rx) = broadcast::channel::<String>(10);

    loop {
        let (socket, _) = listener.accept().await.unwrap();
        tokio::spawn(async move {
            handle_client(socket).await;
        });

        tokio::spawn(async move {
            loop {
                if let Ok(message) = rx.recv().await {
                    // Broadcast the message to all connected clients
                    // TODO: Implement broadcasting logic here
                    println!("Broadcasting: {}", message);
                }
            }
        });
    }
}

async fn handle_client(mut socket: TcpStream) {
    let mut buffer = [0u8; 1024];
    match socket.read(&mut buffer).await {
        Ok(0) => {
            // Connection closed by the client
            return;
        }
        Ok(n) => {
            let message = String::from_utf8_lossy(&buffer[..n]);
            println!("Received message: {}", message);
        }
        Err(e) => {
            eprintln!("Error reading from socket: {}", e);
            return;
        }
    }

    // Handle client logic here
}
