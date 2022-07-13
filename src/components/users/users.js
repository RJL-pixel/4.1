
import {useForm} from "react-hook-form";
import {CreateUser} from "../../services";

const Users = () => {



   const {register, handleSubmit, formState: {errors}} = useForm({

defaultValues: {
    name: 'name',
    username: 'usermame',
    email: 'example@gmail.com',
    street: 'street'
}
    });

   const submit = (obj) => {
CreateUser(obj).then(value => console.log(value))
     
   }
   
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

              <input type='text' {...register('name', {required: true})}/>
                {
                errors.name && <span>kosyak</span>
                }
                <input type='text' {...register('username', {required: true})}/>
            <input type='text' {...register('email', {required: true})}/>
                <input type='text' {...register('street', {required: true})}/>

                <input type='submit'/>
            </form>
        </div>
    );
};

export  {Users};