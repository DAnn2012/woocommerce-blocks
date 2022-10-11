/**
 * External dependencies
 */
import type { CartShippingPackageShippingRate } from '@woocommerce/type-defs/cart';

export interface minMaxPrices {
	min: CartShippingPackageShippingRate | undefined;
	max: CartShippingPackageShippingRate | undefined;
}

/**
 * Returns the cheapest and most expensive rate that isn't a local pickup.
 *
 * @param {Array|undefined} shippingRates Array of shipping Rate.
 *
 * @return {Object|undefined} Object with the cheapest and most expensive rates.
 */
export function getShippingPrices(
	shippingRates: CartShippingPackageShippingRate[]
): minMaxPrices {
	if ( shippingRates ) {
		return {
			min: shippingRates.reduce(
				(
					lowestRate: CartShippingPackageShippingRate | undefined,
					currentRate: CartShippingPackageShippingRate
				) => {
					if ( currentRate.method_id === 'local_pickup' ) {
						return lowestRate;
					}
					if (
						lowestRate === undefined ||
						currentRate.price < lowestRate.price
					) {
						return currentRate;
					}
					return lowestRate;
				},
				undefined
			),
			max: shippingRates.reduce(
				(
					highestRate: CartShippingPackageShippingRate | undefined,
					currentRate: CartShippingPackageShippingRate
				) => {
					if ( currentRate.method_id === 'local_pickup' ) {
						return highestRate;
					}
					if (
						highestRate === undefined ||
						currentRate.price > highestRate.price
					) {
						return currentRate;
					}
					return highestRate;
				},
				undefined
			),
		};
	}
	return {
		min: undefined,
		max: undefined,
	};
}

/**
 * Returns the cheapest rate that is a local pickup.
 *
 * @param {Array|undefined} shippingRates Array of shipping Rate.
 *
 * @return {Object|undefined} cheapest rate.
 */
export function getLocalPickupPrices(
	shippingRates: CartShippingPackageShippingRate[]
): minMaxPrices {
	if ( shippingRates ) {
		return {
			min: shippingRates.reduce(
				(
					lowestRate: CartShippingPackageShippingRate | undefined,
					currentRate: CartShippingPackageShippingRate
				) => {
					if ( currentRate.method_id !== 'local_pickup' ) {
						return lowestRate;
					}
					if (
						lowestRate === undefined ||
						currentRate.price < lowestRate.price
					) {
						return currentRate;
					}
					return lowestRate;
				},
				undefined
			),
			max: shippingRates.reduce(
				(
					highestRate: CartShippingPackageShippingRate | undefined,
					currentRate: CartShippingPackageShippingRate
				) => {
					if ( currentRate.method_id !== 'local_pickup' ) {
						return highestRate;
					}
					if (
						highestRate === undefined ||
						currentRate.price > highestRate.price
					) {
						return currentRate;
					}
					return highestRate;
				},
				undefined
			),
		};
	}
	return {
		min: undefined,
		max: undefined,
	};
}
