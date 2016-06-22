/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.text.TextDirectionHeuristic.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module text {
		export class BidiFormatter {
			public static getInstance(): android.text.BidiFormatter;
			public static getInstance(param0: boolean): android.text.BidiFormatter;
			public static getInstance(param0: java.util.Locale): android.text.BidiFormatter;
			public isRtlContext(): boolean;
			public getStereoReset(): boolean;
			public isRtl(param0: string): boolean;
			public unicodeWrap(param0: string, param1: android.text.TextDirectionHeuristic, param2: boolean): string;
			public unicodeWrap(param0: string, param1: android.text.TextDirectionHeuristic): string;
			public unicodeWrap(param0: string, param1: boolean): string;
			public unicodeWrap(param0: string): string;
		}
		export module BidiFormatter {
			export class Builder {
				public constructor();
				public constructor(param0: boolean);
				public constructor(param0: java.util.Locale);
				public stereoReset(param0: boolean): android.text.BidiFormatter.Builder;
				public setTextDirectionHeuristic(param0: android.text.TextDirectionHeuristic): android.text.BidiFormatter.Builder;
				public build(): android.text.BidiFormatter;
			}
		}
	}
}