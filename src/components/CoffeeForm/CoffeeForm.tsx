import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CoffeeFormProps {
    id?:string;
    data?:{}
}

interface CoffeeState {
    name: string;
    price: string;
}

export const CoffeeForm = (props:CoffeeFormProps) => {

    const dispatch = useDispatch();
    let { coffeeData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<CoffeeState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Coffee Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Coffee description"/>
                </div>
                <div>
                    <label htmlFor="place_of_origin">Place of Origin</label>
                    <Input {...register('place_of_origin')} name="place_of_origin" placeholder="Place of Origin"/>
                </div>
                <div>
                    <label htmlFor="roast">Roast</label>
                    <Input {...register('roast')} name="roast" placeholder="Roast"/>
                </div>
                <div>
                    <label htmlFor="cost_of_production">Cost Of Production</label>
                    <Input {...register('cost_of_production')} name="cost_of_production" placeholder="Cost Of Production"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}