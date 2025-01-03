import { FadeIn } from "./FadeIn";

export const YourSection = () => {
    return (
        <section>
            <FadeIn delay={0.2}>
                <h2>Section Title</h2>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up">
                <p>Some content that fades in and slides up</p>
            </FadeIn>

            {/* For a list of items, you can stagger the animations */}
            {items.map((item, index) => (
                <FadeIn key={item.id} delay={0.2 * index} direction="up">
                    <div>{item.content}</div>
                </FadeIn>
            ))}
        </section>
    );
}; 