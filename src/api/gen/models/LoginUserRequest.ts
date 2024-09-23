/* tslint:disable */
/* eslint-disable */
/**
 * Hotel Booking and Authentication API
 * API for managing hotels, bookings, and user authentication
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface LoginUserRequest
 */
export interface LoginUserRequest {
  /**
   * The user's email address
   * @type {string}
   * @memberof LoginUserRequest
   */
  email: string;
  /**
   * The user's password
   * @type {string}
   * @memberof LoginUserRequest
   */
  password: string;
}

/**
 * Check if a given object implements the LoginUserRequest interface.
 */
export function instanceOfLoginUserRequest(value: object): value is LoginUserRequest {
  if (!('email' in value) || value['email'] === undefined) return false;
  if (!('password' in value) || value['password'] === undefined) return false;
  return true;
}

export function LoginUserRequestFromJSON(json: any): LoginUserRequest {
  return LoginUserRequestFromJSONTyped(json, false);
}

export function LoginUserRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LoginUserRequest {
  if (json == null) {
    return json;
  }
  return {
    email: json['email'],
    password: json['password'],
  };
}

export function LoginUserRequestToJSON(value?: LoginUserRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    email: value['email'],
    password: value['password'],
  };
}
