# Dev Stack

Dev Stack is a simple React website where developers can explore different technologies and build their own development stack.

Users can see technology details like category, description, difficulty, rating and badge. They can also add technologies to their own stack and manage them easily.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React-Toastify
- JSON

## Core Features

1.Explore Technologies

Users can explore different technologies from the website.

The technology data is loaded from a JSON file instead of directly writing the data inside the React component.

Each technology card shows its name, category, description, difficulty, rating and badge.

2.  Add Technologies to Your Stack

Users can add technologies to their own stack by clicking the **Add to Stack** button.

The same technology cannot be added more than once. If a technology is already added, the button becomes disabled and shows **✓ Added to Stack**.

A toast notification is also shown when a technology is successfully added.

3.  Manage Your Stack

Users can see all their selected technologies in the **Your Stack** section.

They can remove a single technology or use "Remove All" to clear the complete stack.

The selected technology count is also updated automatically when technologies are added or removed.

## React Questions & Answers

1. What is JSX, and why is it used in React?

JSX হলো এমন একটি syntax যেখানে JavaScript বা TypeScript-এর ভিতরে HTML-এর মতো code লেখা যায়।

React-এ JSX ব্যবহার করা হয় কারণ এর মাধ্যমে UI-এর structure সহজে এবং readable ভাবে লেখা যায়।

2.  What is the difference between props and state?

Props ব্যবহার করা হয় parent component থেকে child component-এ data পাঠানোর জন্য।

অন্যদিকে, state component-এর ভিতরের changing data রাখে। State change হলে React আবার UI update করে।

3. What does the "useState" hook do, and where did you use it in this project?

useState hook component-এর মধ্যে changing data store এবং update করার জন্য ব্যবহার করা হয়। এই project-এ আমি TechnologySection.tsx file-এর মধ্যে useState ব্যবহার করে user-এর selected technologies গুলো store এবং manage করেছি। stack-এর মধ্যে selected technologies রাখা হয় এবং setStack দিয়ে add বা remove করার সময় state update করা হয়।

->TechnologySection.tsx
const [stack, setStack] = useState<ITechnology[]>([]);

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect সাধারণত component-এর side effect handle করার জন্য ব্যবহার করা হয়। যেমন data fetch করা বা component render হওয়ার পরে কোনো কাজ করা।

তবে এই project-এ JSON data load করার জন্য আমি useEffect ব্যবহার করিনি।

আমি App.tsx file-এ একটি Promise তৈরি করে JSON data fetch করেছি এবং TechnologySection.tsx file-এ React-এর use() ব্যবহার করে সেই data নিয়েছি।

তাই এই project-এ data load করার জন্য useEffect-এর প্রয়োজন হয়নি।


5. Why does every item in a .map() list need a unique key prop?

React যখন .map() ব্যবহার করে কোনো list-এর অনেকগুলো item render করে, তখন প্রতিটি item-এর জন্য একটি unique key দেওয়া হয়।

এর মাধ্যমে React list-এর প্রতিটি item আলাদাভাবে identify করতে পারে এবং কোনো item change, add বা remove হলে UI efficiently update করতে পারে।

এই project-এ TechnologySection.tsx file-এ technologies map করার সময় TechnologyCard-এর key হিসেবে technology.name ব্যবহার করেছি।

Example:

{technologies.map((technology) => ( <TechnologyCard
 key={technology.name}
 technology={technology}
/>
))}

---

6. What is conditional rendering? Show one place you used it.

Conditional rendering মানে হলো কোনো condition-এর ওপর ভিত্তি করে UI-এর ভিন্ন অংশ দেখানো। আমাদের project-এর Your Stack section-এ এটি ব্যবহার করেছি। যখন stack empty থাকে, তখন “Your Stack is Empty” message দেখায়। আর যখন কোনো technology add করা হয়, তখন সেই selected technology-গুলোর list দেখায়।


Example:

{stack.length === 0 && (

  <div>
    <p>Your stack is empty.</p>
  </div>
)}

এখানে stack-এর length 0 হলে শুধু empty message দেখানো হবে।

একইভাবে stack-এ technology থাকলে Remove All button দেখানো হয়েছে।


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent component থেকে child component-এ data পাঠানোর জন্য props ব্যবহার করা হয়।

এই project-এ TechnologySection.tsx file থেকে TechnologyCard.tsx component-এ technology, addToStack এবং isSelected props হিসেবে পাঠানো হয়েছে।

Example:

<TechnologyCard
technology={technology}
addToStack={addToStack}
isSelected={stack.some(
(item) => item.name === technology.name
)}>
</TechnologyCard>

এখানে technology এবং অন্যান্য data parent থেকে child-এ পাঠানো হচ্ছে।

আবার child component থেকে parent-এর function ব্যবহার করার জন্য parent component-এর function props হিসেবে child-এ পাঠানো হয়েছে।

এই project-এ addToStack function-টি TechnologyCard-এ পাঠানো হয়েছে। User Add to Stack button-এ click করলে TechnologyCard থেকে সেই function call হয় এবং technology parent component-এর stack-এ add হয়।
