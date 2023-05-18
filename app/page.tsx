'use client';

import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Next.js Material UI</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A simple, clean starter web app project with Next.js, React, and Material UI.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button href="/signup" variant="outlined" sx={{ m: 0.5 }}>Sign up</Button>
            <Button href="/login" variant="contained" sx={{ m: 0.5 }}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
