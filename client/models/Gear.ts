/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityFilter } from './ActivityFilter';
import type { GearReminder } from './GearReminder';
export type Gear = {
    id?: string;
    athlete_id?: string;
    type?: Gear.type;
    name?: string;
    purchased?: string;
    notes?: string;
    distance?: number;
    time?: number;
    activities?: number;
    use_elapsed_time?: boolean;
    retired?: string;
    component_ids?: Array<string>;
    reminders?: Array<GearReminder>;
    activity_filters?: Array<ActivityFilter>;
    component?: boolean;
};
export namespace Gear {
    export enum type {
        BIKE = 'Bike',
        SHOES = 'Shoes',
        WETSUIT = 'Wetsuit',
        ROWING_MACHINE = 'RowingMachine',
        SKIS = 'Skis',
        SNOWBOARD = 'Snowboard',
        BOAT = 'Boat',
        BOARD = 'Board',
        EQUIPMENT = 'Equipment',
        ACCESSORIES = 'Accessories',
        APPAREL = 'Apparel',
        COMPUTER = 'Computer',
        LIGHT = 'Light',
        BATTERY = 'Battery',
        BRAKE = 'Brake',
        BRAKE_PADS = 'BrakePads',
        ROTOR = 'Rotor',
        DRIVETRAIN = 'Drivetrain',
        BOTTOM_BRACKET = 'BottomBracket',
        CASSETTE = 'Cassette',
        CHAIN = 'Chain',
        CHAINRINGS = 'Chainrings',
        CRANKSET = 'Crankset',
        DERAILLEUR = 'Derailleur',
        PEDALS = 'Pedals',
        LEVER = 'Lever',
        CABLE = 'Cable',
        FRAME = 'Frame',
        FORK = 'Fork',
        HANDLEBAR = 'Handlebar',
        HEADSET = 'Headset',
        SADDLE = 'Saddle',
        SEATPOST = 'Seatpost',
        SHOCK = 'Shock',
        STEM = 'Stem',
        AXEL = 'Axel',
        HUB = 'Hub',
        TRAINER = 'Trainer',
        TUBE = 'Tube',
        TYRE = 'Tyre',
        WHEEL = 'Wheel',
        WHEELSET = 'Wheelset',
        POWER_METER = 'PowerMeter',
        CLEATS = 'Cleats',
        CYCLING_SHOES = 'CyclingShoes',
        PADDLE = 'Paddle',
    }
}

