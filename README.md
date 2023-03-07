# Cumple Infantil web app in React.js

<image src="./readme.jpg" alt="printscreen web app">

## + Content:

<br>

### + Hero image

<br>

### + Countdown

<br>

### + Location and gmaps iframe

<br>

### + Photo Galery, instagram style

<br>

### + Confirmation form

<br>

#### For the form it was made:

1- Component: contact form

2- Custom Hook: useForm. This will have all the logic.

&nbsp; 2.a- useForm will contain the state variables:

&nbsp;&nbsp;&nbsp; I- "form" to start the empty form and save the data entered.

&nbsp;&nbsp;&nbsp; II- "errors" to handle errors.

&nbsp;&nbsp;&nbsp; III- "loading" to show the animation while sending and waiting for the response from the server.

&nbsp;&nbsp;&nbsp; IV- "response" to handle responses from the server.

&nbsp;2.b- Handler events:

&nbsp;&nbsp;&nbsp;I-"Change" to detect when you are entering values.

&nbsp;&nbsp;&nbsp;II-"Blur" to do the validations when the form loses focus.

&nbsp;&nbsp;&nbsp;III-"Submit" to send.

&nbsp;2.c- This hook returns the 4 state variables, and the 3 event handlers. 🟡IMPORTANT❗: This return must be wrapped in CURLY BRAKETS, not in parentheses. Because it returns an OBJECT.

3- In the contact form:

&nbsp;3.a- We destructure what returns from useForm

&nbsp;3.b- We pass the initial values (initialForm and validationsForm)

&nbsp;3.c- Returns the UI of the form:

&nbsp;&nbsp;&nbsp;I- In the input we place the handler events when the focus is lost (onBlur) and when the data is entered (onChange).

4- Use de files: Message.js Loader.js Loader.css helpHttp.js (inside helpers bin)

<image src="./readme2.jpg" alt="printscreen web app">
