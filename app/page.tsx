export default function Home() {
  return (
    <div className="container-fluid">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Next.js Bootstrap</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            A simple, clean starter web app project with Next.js, React, and Bootstrap.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/signup" className="btn btn-outline-secondary btn-lg px-4" role="button">Sign up</a>
            <a href="/login" className="btn btn-primary btn-lg px-4 gap-3" role="button">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
