import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()

        const hashedPassword = await bcrypt.hash(password, 10);
        await connectMongoDB(); 
        const user = await User.findOne({ email }).select("_id");
        if (user) {
            return NextResponse.json({
                message: "User already exists!"
            },
            {
                status: 422
            })
        } 
        await User.create({name, email, admin:false, password: hashedPassword})
    

        return NextResponse.json({
            message: "User registered!"
        },
        {
            status: 201
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "An error occured while registering the user."
        },
        {
            status: 500
        })
    }
}