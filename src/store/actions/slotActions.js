import { FETCH_SLOTS_STARTED, FETCH_SLOTS, UPDATE_SLOT, SLOTS_ERROR } from './types';
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

export const fetchSlots = () => dispatch => {
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
                storeData('slots', defaultSlots)
                    .then(() => {
                        dispatch({
                            type: FETCH_SLOTS,
                            payload: defaultSlots,
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

export const updateSlot = (slotData) => dispatch => {
    console.log('slotDataslotData', slotData);
    console.log('slotDataslotData', slotData.slotData.firstName);
    getData('slots')
        .then(res => {
            const fetchedSlots = res;
            const slotObj = {
                slotTimeString: fetchedSlots[slotData.slotIndex].slotTimeString,
                slotDetails: {
                    firstName: slotData.slotData.firstName,
                    lastName: slotData.slotData.lastName,
                    contact: slotData.slotData.contactNumber,
                }
            }
            fetchedSlots[slotData.slotIndex] = slotObj;
            storeData('slots', fetchedSlots)
                .then(() => {
                    dispatch({
                        type: UPDATE_SLOT,
                        payload: fetchedSlots,
                    })
                })
        }
    );
}