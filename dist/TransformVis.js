 

function outLoadVisualization(data,container){
  //export.outLoadVisualization= function (data,container){
      //var container = document.getElementById('mynetwork');
  	  var DataIn=data;

	  var DataInStr=JSON.stringify(DataIn);

	  //console.log(DataInStr);
	  DataInStr=DataInStr.replace(/start/g,"from");
	  DataInStr=DataInStr.replace(/end/g,"to");

	  var RawData = JSON.parse(DataInStr);
	  //console.log(DataRaw);
	  
	  var nodes = new vis.DataSet(RawData.nodes);

	  // create an array with edges
	  
	  
	  var edges = new vis.DataSet(RawData.edges); 

	  // create a network
	  //var container = document.getElementById('mynetwork');
	  var data = {
		nodes: nodes,
		edges: edges
	  };
	  var options = {
			interaction:{
				dragNodes:true,
				dragView: true,
				hideEdgesOnDrag: false,
				hideNodesOnDrag: false,
				hover: false,
				hoverConnectedEdges: true,
				keyboard: {
				  enabled: false,
				  speed: {x: 10, y: 10, zoom: 0.02},
				  bindToWindow: true
				},
			multiselect: false,
			navigationButtons: false,
			selectable: true,
			selectConnectedEdges: true,
			tooltipDelay: 300,
			zoomView: true
		  }

	  };
	  
	  var network = new vis.Network(container, data, options);
	  network.setOptions(options);
  
  };
  
  