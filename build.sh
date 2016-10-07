#!/usr/bin/env bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
mv my-release-key.keystore android/app/
cd ./android/
sed -i -e '/android.useDeprecatedNdk=true/a\MYAPP_RELEASE_STORE_FILE=my-release-key.keystore\MYAPP_RELEASE_KEY_ALIAS=my-key-alias\MYAPP_RELEASE_STORE_PASSWORD=xjb687125\MYAPP_RELEASE_KEY_PASSWORD=xjb687125' gradle.properties
