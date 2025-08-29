1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
**Ans:** getElementById means we can call any attribute from html by their uniqe id name, and getElementsByClassName means all elements that share a specific class name. And in querySelector it looks for which elements match with that selector then it just select first element among them, But querySelectorAll means it select all elements that match with selector.

2. How do you **create and insert a new element into the DOM**?
**Ans:** we can create and insert a new element into the DOM by- document.createElement() and appendChild()

3. What is **Event Bubbling** and how does it work?
**Ans:** Event Bubbling means findout the root of it's document, it's work like a tree it use for climb on the ancestor elements step by step, until it reaches the document root.

4. What is **Event Delegation** in JavaScript? Why is it useful?
**Ans:** Event Delegation works like event listener and it's importent because by using that we can add event listener in parent so no need to apply for every child also if we are in big project if we need to do loop it can consume few times which is not good for big project so in there we have to use Event Delegation event listener.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Ans:** the difference between preventDefault() and stopPropagation() methods is preventDefault() stops default behavior of any event and stopPropagation() stops the event bubbling going up.
---