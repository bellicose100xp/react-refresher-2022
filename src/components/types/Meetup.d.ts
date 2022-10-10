export interface MeetupData {
    title: string,
    image: string,
    address: string,
    description: string
}

export interface FirebaseData {
    [key: string]: MeetupData;
}