export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (
      !body.fullName ||
      !body.phoneNumber ||
      !body.serviceType ||
      !body.locationDescription ||
      body.latitude === undefined ||
      body.longitude === undefined
    ) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Booking received:", body)

    // TODO: Save booking to database/email service
    // For now, we're just logging and returning success

    return Response.json(
      {
        success: true,
        message: "Booking received successfully",
        bookingId: `BK-${Date.now()}`,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return Response.json({ error: "Failed to process booking" }, { status: 500 })
  }
}
