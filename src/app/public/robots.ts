export async function GET() {
    return new Response(
        `User-agent: *
  Allow: /
  
  Disallow: /admin
  Disallow: /private
  `, // Add any other paths you want to block from being crawled
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    );
}
