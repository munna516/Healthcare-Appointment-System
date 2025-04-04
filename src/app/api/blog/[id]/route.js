import connect from "src/lib/dbConnect";
import Blog from "src/models/Blog";

export async function GET(request, { params }) {
  try {
    await connect();
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(blog), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
