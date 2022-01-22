JS_PATH=/mnt/d/sin2020/2021/2021winter/challenge_cup/shuya/shuyaplat/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/

find ${JS_PATH_SRC} -type f -name '*.js' | sort | xargs cat > ${JS_PATH_DIST}shuya.js