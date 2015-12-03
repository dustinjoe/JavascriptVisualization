  function rawDataTransform(data){
  //export.rawDataTransform= function (data){
  
  	  var DataIn=data;

	  var DataInStr=JSON.stringify(DataIn);

	  //console.log(DataInStr);
	  DataInStr=DataInStr.replace(/start/g,"from");
	  DataInStr=DataInStr.replace(/end/g,"to");

	  var RawData = JSON.parse(DataInStr);
	  //console.log(DataRaw);
	  
	  return RawData;
  
  };
  
  //export.rawDataTransform=rawDataTransform;
  