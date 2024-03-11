uniform float uTime;
void main() {
    csm_Position.xyz = position;
    csm_Position.y += sin(position.x + uTime) * 0.1;
}