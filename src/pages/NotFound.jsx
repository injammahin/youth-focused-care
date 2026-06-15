import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding py-36">
      <div className="container-custom text-center">
        <h1 className="heading-lg">Page not found</h1>
        <p className="text-muted mx-auto mt-5 max-w-xl">The page you are looking for does not exist or may have been moved.</p>
        <Button to="/" className="mt-8">Back Home</Button>
      </div>
    </section>
  );
}
