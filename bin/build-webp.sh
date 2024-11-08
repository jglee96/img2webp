#!/usr/bin/env bash

docker run --rm -v $(pwd):/src -u $(id -u):$(id -g) \
  emscripten/emsdk emcc -O3 -s WASM=1 \
  -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
  -I libwebp webp.c libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c libwebp/sharpyuv/*.c \
  -o webp.out.js