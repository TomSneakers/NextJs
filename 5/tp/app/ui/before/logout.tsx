"use client"
import React from 'react';
import { signOut } from "next-auth/react"
import { PowerIcon } from '@heroicons/react/24/outline';



    export default function LogoutButton() {
        return (   
          <button onClick={() => signOut()}>Sign out</button>
        )
    }




