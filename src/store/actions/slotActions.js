import { FETCH_SLOTS_STARTED, FETCH_SLOTS, UPDATE_SLOT } from './types';
import { storeData, fetchData, getData } from '../../helpers/asyncStorageHelper';

const defaultSlots = [
    {
        slotTimeString: '9:00am to 10:00 am',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '10:00am to 11:00 am',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '11:00am to 12:00 am',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '1:00pm to 2:00 pm',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '2:00pm to 3:00 pm',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '3:00pm to 4:00 pm',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
    {
        slotTimeString: '4:00pm to 5:00 pm',
        slotDetails: {
            firstName: '',
            lastName: '',
            contact: '',
        },
    },
];

const fetchSlots = () => dispatch => {
    console.log('calling slots Action');
    //start fetching slots from async Storage
    dispatch({
        type: FETCH_SLOTS_STARTED,
    });
    // fetch slots from async storage
    getData('slots')
        .then(res => {
            if (res) {
                dispatch({
                    type: FETCH_SLOTS,
                    payload: res
                })
            } else {
                storeData('slots', slots)
                    .then(() => {
                        dispatch({
                            type: FETCH_SLOTS,
                            payload: slots,
                        })
                    })
                    .catch(error => dispatch({
                        type: SLOTS_ERROR,
                        payload: error,
                    }))
            }
        })
        .catch(er => dispatch({
            type: SLOTS_ERROR,
            payload: er,
        }));
}