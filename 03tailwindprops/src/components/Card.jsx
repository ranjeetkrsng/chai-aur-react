/* eslint-disable */

function Card({userName, desc, btnText}) {
  console.log(userName, desc, btnText);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-4">
<img className="md:w-auto0000 md:h-auto md:rounded-none mx-auto z-0 h-full w-full rounded-md object-cover" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60" alt="AirMax Pro" />
<div className='absolute inset-D bg-gradient-to-t from-gray-900 to-transparent'></div>
<div className='absolute bottom-4 left-4 text-left'>
  <h1 className='text-lg font-semibold text-white'>{userName}</h1>
  {typeof desc === "object" && !Array.isArray(desc) ? (
          Object.entries(desc).map(([key, value], index) => (
            <p key={index}>
              {key}: {JSON.stringify(value)}
            </p>
          ))
        ) : Array.isArray(desc) ? (
          desc.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p className='mt-2 text-sm text-gray-300'>{desc}</p>
        )}
  
  <button className='mt-2 inlin-flex cursor-pointer intems-center text-sm font-semibold text-white bg-black'>{btnText} &rarr;</button>
</div>
</div>
  )
}

export default Card