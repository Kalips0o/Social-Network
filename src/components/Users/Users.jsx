import React from 'react';
import styles from './users.module.css'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://cdnn21.img.ria.ru/images/56176/54/561765466_0:0:0:0_600x0_80_0_0_9ba3dad3909fce093d3605e022c32b21.jpg',
                followerd: false,
                fullName: 'Stiv Jobs',
                status: 'I am a boss',
                location: {city: 'New York', country: 'America'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/736x/b4/72/a1/b472a1234f0fad2a6bd45750c14e7bec.jpg',
                followerd: false,
                fullName: 'Hanna Berezko',
                status: 'Hello, I am Hanna',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://www.graycell.ru/picture/big/gloriya.jpg',
                followerd: true,
                fullName: 'Hloria Lucky',
                status: 'Skilled herbologist and terrarium owner',
                location: {city: 'Antananarivo', country: 'Madagaskar'}
            },
            {
                id: 4,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Alex_Sparrow_04-11_RN_MOW.jpg',
                followerd: false,
                fullName: 'Alexey Vorobey',
                status: 'Fitness Trainer',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 5,
                photoUrl: 'https://assets.gq.ru/photos/5d9f4dcf55f8500008a802d9/4:3/w_800,h_600,c_limit/0.jpg',
                followerd: false,
                fullName: 'Jack Sparrow',
                status: 'Kaptain,Jack Sparrow ',
                location: {city: 'Tortuga', country: ' Caribe'}
            }])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followerd ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> Unfollow </button> :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}> Follow </button>}


                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div> {u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country} </div>
                            <div>{u.location.city} </div>


                        </span>
                    </span>
                </div>)

            }
        </div>

    )
}

export default Users