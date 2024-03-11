uniform float uTime;
void main() {
    csm_FragColor = vec4((sin(uTime) + 1.0) / 2.0, 0.0, 1.0, 1.0);
}