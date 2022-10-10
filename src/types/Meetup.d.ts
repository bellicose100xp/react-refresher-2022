export interface MeetupData {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
}

export type MeetupDataNoId = Omit<MeetupData, 'id'>

export interface FirebaseData {
    [key: string]: MeetupDataNoId;
}