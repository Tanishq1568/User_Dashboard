import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    const formattedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      city: user.address.city,
      company: user.company.name,
      website: user.website,
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
}