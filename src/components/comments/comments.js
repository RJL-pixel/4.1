
import {useForm} from "react-hook-form";
import {CreateComment} from "../../services";

const Comments = () => {



    const {register, handleSubmit, formState: {errors}} = useForm({

        defaultValues: {
            name: 'name',
           body: 'body',
            email: 'example@gmail.com',

        }
    });

    const submit = (obj) => {
        CreateComment(obj).then(value => console.log(value))

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <span>kosyak</span>
                }
                <input type='text' {...register('body', {required: true})}/>
                <input type='text' {...register('email', {required: true})}/>
                <input type='submit'/>
            </form>
        </div>
    );
};

export  {Comments};