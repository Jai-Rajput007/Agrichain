"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import SignInCard from "@/components/Signin_c/SignInCard";
import Content from "@/components/Signin_c/Content";
import { Providers } from "../../providers";

export default function SignInSide() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <Stack
          direction="column"
          component="main"
          className="justify-center min-h-full"
          sx={{
            marginTop: 'max(40px, 0px)',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            className="justify-center gap-6 sm:gap-12 p-2 mx-auto"
          >
            <Stack
              direction={{ xs: 'column-reverse', md: 'row' }}
              className="justify-center gap-6 sm:gap-12 p-2 sm:p-4 m-auto"
            >
              <Content />
              <SignInCard />
            </Stack>
          </Stack>
        </Stack>
      </main>
    </div>
  );
}