# JavascriptVisualization
Use Vis.js to Visualize a Graph

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

Shortcoming:
  I have tried to make a function of browsing the local directory to choose a input data for visualization. However, I have not succeeded in doing this job. Many online examples use ActiveX, which is useless now. And now I am trying to use File API
but have not been successful.


New Version of Usage:
Use the data transform function as an external library and realize the visualization.
The files:  ImportUsage.html & ImportUsage-v2.html
They show different methods to use it.
