/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PowerModel = {
    type?: PowerModel.type;
    criticalPower?: number;
    wPrime?: number;
    pMax?: number;
    inputPointIndexes?: Array<number>;
    ftp?: number;
};
export namespace PowerModel {
    export enum type {
        MS_2P = 'MS_2P',
        MORTON_3P = 'MORTON_3P',
        FFT_CURVES = 'FFT_CURVES',
        ECP = 'ECP',
    }
}

