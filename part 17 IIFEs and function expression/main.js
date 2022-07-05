// IIFEs (Immediately Invokeable Function Expressions)

(function display(message){
  document.write(message)
})("Hello");


// Function Expressions
const display  = function displayMessage() {
  document.write("Hi i am Message")
}
display();


// (.), {.}, [.], <.>
// Task 7: create an IIFEs that preint sum of 2 numbers


