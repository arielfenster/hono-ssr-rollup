<script setup lang="ts">
import { STATIC_CSS_FILE_PATH } from '../../../shared/constants';

defineProps<{
	title: string;
	pageScript: string;
}>();
</script>

<template>
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
			<link :href="STATIC_CSS_FILE_PATH" rel="stylesheet" />
			<title>{{ title }}</title>
		</head>
		<body>
			<div id="app">
				<slot></slot>
			</div>
		</body>
		<script :src="pageScript"></script>
	</html>
</template>
