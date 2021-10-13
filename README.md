# StencilJS-React-practice-medium
>
> <details>
>  <summary><b>CONTENTS</b></summary>
>
>> | [About](https://github.com/mmmoore1313/StencilJS-React-practice-medium#about) | [Technologies Used](https://github.com/mmmoore1313/StencilJS-React-practice-medium#technologies-used) |
>> |--|--|
>> | [Steps](https://github.com/mmmoore1313/StencilJS-React-practice-medium#steps) | [Links](https://github.com/mmmoore1313/StencilJS-React-practice-medium#links) |
> </details>
>
> ## About
>> <details>
>>  <summary>This is built following the stencil.js tutorial found at <a href="https://medium.com/stencil-tricks/creating-reusable-a-reusable-web-component-with-stenciljs-b2842af54c51">Creating a Reusable Web Component with StencilJS</a></summary>
>> 
>>> 
>>###### [Return to top](https://github.com/mmmoore1313/StencilJS-React-practice-medium)
>> </details>
> ## Steps
>> <details>
>>  <summary>Steps taken</summary>
>>
>>> <details>
>>>  <summary>1. Create a project directory</summary>
>>>
>>>> 1.1- `mkdir <projectname>`  
>>>> 1.2- `cd <projectname>`
>>> </details>
>>> <details>
>>>  <summary>2. Initialize the stencil</summary>
>>>
>>>> 2.1- Run `npm init`  
>>>> 2.2- Choose the `component` option  
>>>> 2.3- Name your project  
>>>> 2.4- Run `npm install`
>>> </details>
>>> <details>
>>>  <summary>3. Create a component.</summary>
>>>
>>>> <details>
>>>>  <summary>3.1- Create <code>component</code> directory</summary>
>>>>
>>>>> ``` 
>>>>> mkdir src/components/my-accordion
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.2- Create and fill out file <code>component.tsx</code></summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.2.1- Create <code>component.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-accordion/my-accordion.tsx
>>>>>> ``` 
>>>>> </details>  
>>>>> <details>
>>>>>  <summary>3.2.2- <code>my-accordion.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';
>>>>>> 
>>>>>> @Component({
>>>>>>   tag: 'my-accordion',
>>>>>>   styleUrl: 'my-accordion.scss',
>>>>>>   shadow: true
>>>>>> })
>>>>>> 
>>>>>> export class MyComponent {
>>>>>> 
>>>>>>   @State() toggle: boolean = false;
>>>>>> 
>>>>>>   @Event() onToggle: EventEmitter;
>>>>>> 
>>>>>>   @Prop() label: string;
>>>>>> 
>>>>>>   @Prop() description: string;
>>>>>> 
>>>>>>   @Prop() width: string;
>>>>>> 
>>>>>>   @Prop() color: string;
>>>>>> 
>>>>>>   toggleComponent() {
>>>>>>     this.toggle = !this.toggle;
>>>>>>     this.onToggle.emit({ visible: this.toggle });
>>>>>>   }
>>>>>> 
>>>>>>   render() {
>>>>>> 
>>>>>>     return (
>>>>>>       <div>
>>>>>>       <button class="accordion"
>>>>>>       style={{
>>>>>>         width: this.width,
>>>>>>         backgroundColor: this.color,
>>>>>>       }}
>>>>>>       onClick={() => this.toggleComponent()}>
>>>>>>       {this.label}
>>>>>>       {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
>>>>>>       </button>
>>>>>>       <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
>>>>>>       style={{width: this.width}}>
>>>>>>       <p>{this.description}</p>
>>>>>>       </div>
>>>>>>       </div>
>>>>>>     )
>>>>>>   }
>>>>>> }
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>>> <details>
>>>>  <summary>3.3- Create a <code>component.scss</code> file</summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.3.1- Create <code>component.scss</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-accordion/my-accordion.scss
>>>>>> ``` 
>>>>> </details> 
>>>>> <details>
>>>>>  <summary>3.3.2- Fill out <code>component.scss</code> file</summary>
>>>>>
>>>>>> ``` 
>>>>>> * {
>>>>>>     font-family: 'Lato', sans-serif;
>>>>>> }
>>>>>> 
>>>>>> .container {
>>>>>>     display: flex;
>>>>>>     flex-direction: column;
>>>>>>     justify-content: center;
>>>>>>     align-items: center
>>>>>> }
>>>>>> 
>>>>>> .accordion {
>>>>>>     cursor: pointer;
>>>>>>     padding: 18px;
>>>>>>     text-align: left;
>>>>>>     border-radius: 20px;
>>>>>>     font-size: 1.2rem;
>>>>>>     font-weight: bold;
>>>>>>     outline: 0;
>>>>>>     span {
>>>>>>         float: right;
>>>>>>     }
>>>>>> }
>>>>>>  
>>>>>>  .open {
>>>>>>     display: block;
>>>>>>     height: auto;
>>>>>>     border-radius: 20px;
>>>>>>     border: 0.5px solid rgb(199, 197, 197);
>>>>>>     width: 200px;
>>>>>>  }
>>>>>> 
>>>>>>  p {
>>>>>>     padding: 18px;
>>>>>>  }
>>>>>> 
>>>>>>  .close {
>>>>>>     display: none;
>>>>>>  }
>>>>>> ``` 
>>>>> </details>
>>>> </details>



