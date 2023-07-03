import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({request}) =>{
  const formDetail = await request.formData();
  const data = Object.fromEntries(formDetail);
  toast.success('success, check your email')
  return redirect('/');
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
  <Form className="form" method="POST">
    <h3 style={{textAlign: 'center' , marginBottom: '2rem'}}>Our Newsletter</h3>
    <div className="form-row">
      <label htmlFor="name" className=" form-label">name</label>
      <input type="text" name="name" id="name" className=" form-input" required/>
    </div>    
    <div className="form-row">
      <label htmlFor="lastName" className=" form-label">last name</label>
      <input type="text" name="lastName" id="lastName" className=" form-input" />
    </div>    
    <div className="form-row">
      <label htmlFor="email" className=" form-label">email</label>
      <input type="text" name="email" id="email"className=" form-input" required />
    </div>  
    <button className="btn btn-block" type="submit">{isSubmitting? 'submitting ....' : 'submit'}</button>  
  </Form>
  )
}
export default Newsletter