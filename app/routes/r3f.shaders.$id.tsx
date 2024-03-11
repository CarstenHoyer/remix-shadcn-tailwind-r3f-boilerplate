import { Suspense, lazy } from "react";

const Experience = lazy(() => import('~/components/r3f/shaders/raging-sea'));

export default function Contact() {
    return (
        <Suspense fallback={<p>Loading lazy chunk...</p>}>
            <Experience />
        </Suspense>
    );
}
