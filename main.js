const users=[
{
  first_name:'Mike',
  last_name:'sheridan'
  },
  {
  first_name:'Tim',
  last_name:'lee'
  },
  {
  first_name:'john',
  last_name:'carte'
  }
  ];
  

 result= users.map(function(person){
	
    return (person.last_name);
    });
	console.log(result);