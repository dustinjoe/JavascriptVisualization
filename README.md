# JavascriptVisualization
Use vis.js to visualiza a graph

Requirement:
Create a javascript library that can take data in the form:
{
name:"Some Graph",
nodes:[
    {label:"abc", id:"1"},
    {label:"def", id:"2"}
],
edges:[
    {label:"some connection",start:"1",end:"2"}
]
}
and display a graph using vis.js

Usage:
  The usage of this program is mainly based on vis.js.
  The input data is a JSON format so the standard JSON parsers can be used. The main difference between the required input format 
and the standard vis.js input format is the edge representation. So they can be easily converted between each other.
  To draw the graph, html must be used(pure Node.js seems impossible). Go to the html file named "basicUsage.html", edit 
the variable "DataIn" in the function "visualization". Close the file and use the browser to open the html. Click "Demo
Draw" and the graph is drawn.