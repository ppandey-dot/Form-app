import React, { useState } from 'react'

export const Form = () => {
    const [formData, setFormData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        country:'India',
        city:'',
        state:'',
        zipcode:'',
        address:'',
        pushnotification:'',
        comments:true,
        candidates:false,
        offers:false

    });

    function ChangeHandler(event){
        const {name, type, value, checked} = event.target;
        
    setFormData(prevState => {
            return({
                ...prevState,
                [name] : type === 'checkbox' ? checked : value
            })
        });
    }

    function sumbmitHandler(event){
        event.preventDefault();
        console.log(formData)
        let data = Object.keys(formData).map((key) => `${key} = ${formData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        alert(data);
    }

  return (
    
    
    <form action='' onSubmit={sumbmitHandler} className='md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md'>
    <div>
         <label htmlFor='first_name'  className='font-medium text-sm'>First Name</label>
        <input
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
         type="text" 
         name='firstname' 
         id='firstname'
         value={formData.firstname}
         placeholder='Priyanshu'
         onChange={ChangeHandler}
         required
         />
    </div>
        <div>
        <label htmlFor='last_name'  className='font-medium text-sm'>Last Name</label>
        <input
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
         type="text"
          name='lastname' 
          id='lastname'
          value={formData.lastname}
          placeholder='Pandey'
          onChange={ChangeHandler}
          required
          />
        </div>
        <div>
        <label htmlFor='email' className='font-medium text-sm'>Last Name</label>
        <input className='w-full border border-blue-400 rounded-md p-2 mt-2'
         type="text"
         name='email'
         id='email' 
         value={formData.email}
         placeholder='email@gmail.com'
         onChange={ChangeHandler}
         required
         />
        </div>
        <div>
        <label htmlFor='country'  className='font-medium text-sm'> Country </label>
        <select 
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
        name='country'
        id='country'
        value={formData.country}
        onChange={ChangeHandler}
        required
                   >
            <option value="India"> India</option>
            <option value="Unityed States" > United States</option>
            <option value='Canada' > Canada</option>
            <option value="Mexico"> Mexico</option>
        </select>
        </div>
       
        <div>
        <label htmlFor='address'  className='font-medium text-sm'> Street Address</label>
         <textarea className='w-full border border-blue-400 rounded-md p-2 mt-2'
          name='address'
          id='address'
          onChange={ChangeHandler} 
          value={formData.address}
          rows='3'
          required
          > </textarea> 
        </div>
        
        <div>
        <label htmlFor='city'  className='font-medium text-sm'> City</label>
        <input 
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
        type="text"
         name="city" 
         id='city'
         value={formData.city}
         placeholder='Gonda'
         onChange={ChangeHandler}
        />
        </div>
        
        <div>
        <label htmlFor='state'  className='font-medium text-sm'>State/ Province</label>
        <input
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
         type='text'
         id='state'
         value={formData.state}
         name='state' 
         placeholder='UP'
         onChange={ChangeHandler}
        />
        </div>
        
        <div>
        <label htmlFor='zipcode'  className='font-medium text-sm'> Zip/ Postal code</label>
        <input
        className='w-full border border-blue-400 rounded-md p-2 mt-2'
         type='number'
         name='zipcode'
         id='zipcode'
         value={formData.zipcode}
          placeholder='102133'
          onChange={ChangeHandler}
         />
        </div>
       

        <div>
            <label  className='font-medium text-sm'>By Email</label>
            <div  className='flex gap-4 items-center mt-2'>
                <input
                className='w-4 h-4 mt-[6px]'
                     onChange={ChangeHandler}
                    type='checkbox'
                    name='comments'
                    id='comments'
                     checked={formData.comments}
                   
                />
                <label htmlFor='comments'  className='font-medium text-sm'>Comments</label>
                <p className='text-sm text-gray-500'> Get notified when someone posts a comment on a posting.</p>
            </div>
            <div  className='flex gap-4 items-center mt-2'>
                <input
                className='w-4 h-4 mt-[6px]'
                     onChange={ChangeHandler}
                    type='checkbox'
                    name='candidates'
                    id='candidates'
                    checked={formData.candidates}
                   
                />
                <label htmlFor='comments'  className='font-medium text-sm'>Candidates</label>
                <p className='text-sm text-gray-500'> Get notified when a candidate applies for a job.</p>
            </div>
            <div  className='flex gap-4 items-center mt-2'>
                <input
                    className='w-4 h-4 mt-[6px]'
                     onChange={ChangeHandler}
                    type='checkbox'
                    name='offers'
                    id='offers'
                   checked={formData.offers}
                   
                />
                <label htmlFor='offers'  className='font-medium text-sm'>Offers</label>
                <p className='text-sm text-gray-500'> Get notified when a candidate accepts or rejects an offer.</p>
            </div>
            
        </div>
        
        <div>
            <label  className='font-medium text-sm'> Push Notification</label>
            <p>These are delivered via SMS to YOur mobile phone.</p>
            <div  className='flex gap-4 items-center mt-2'>
                <input
                className='w-4 h-4'
                    type="radio"
                    name='pushnotification'
                    id='radio1'
                    value="Everything"
                    onChange={ChangeHandler}

                />
                <label  className='font-medium text-sm' htmlFor='radio1'> Everything</label>
            </div>
            <div  className='flex gap-4 items-center mt-2'>
                <input
              className='w-4 h-4'
                    type='radio'
                    name='pushnotification'
                    id='radio2'
                    value="Same as email"
                    onChange={ChangeHandler}

                />
                <label  className='font-medium text-sm' htmlFor='radio2'>Same as email</label>
                </div>
                <div  className='flex gap-4 items-center mt-2'>
                    <input
                        className='w-4 h-4'
                        type='radio'
                        name='pushnotification'
                        id='radio3'
                        value="No Push Notification"
                        onChange={ChangeHandler}
                    />
                    <label  className='font-medium text-sm' htmlFor='radio3'>NO push notification</label>
                </div>
           
        </div>
       
        
       <button 
        className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200'
         type='submit'
       >
          Save
       </button>
        
        

    </form>
    
  )
}


export default Form;
