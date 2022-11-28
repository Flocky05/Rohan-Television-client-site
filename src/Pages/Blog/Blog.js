import React, { useState } from 'react';


const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const Faq = () => {
    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span class="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="232db96b-4aa2-422f-9086-5a77996d1df1"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span class="relative">The</span>
                        </span>{' '}
                        Some answer for you
                    </h2>
                    <p class="text-base text-gray-700 md:text-lg ">
                        You have to know about our mission.This is a great work,You and your family may be profitable buy selling and buying a product From this page.
                        please read the full blog.Our main target ,Don't weast any product,May you sell.A product may be not suitable for you,But it may be needed another person,who try to buy this product,But He/she can't say for his shame.
                    </p>
                </div>
                <div class="space-y-4">
                    <Item title=" What are the different ways to manage a state in a React application?">
                        React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.
                    </Item>
                    <Item title="How does prototypical inheritance work?">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </Item>
                    <Item title="What is a unit test? Why should we write unit tests?">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </Item>
                    <Item title="React vs. Angular vs. Vue?">
                        <h2 className='text-2xl font-bold'>Angular vs React</h2>
                        If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                        React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                        <h2 className='text-2xl font-bold'>React vs Vue</h2>
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                        <h2 className='text-2xl font-bold'>Angular vs Vue</h2>

                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Faq;