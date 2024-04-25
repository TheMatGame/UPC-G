#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;

const vec4 RED = vec4(1,0,0,1);
const vec4 WHITE = vec4(1,1,1,1);

uniform bool classic = false;

void main()
{
	vec2 center = vec2(0.5,0.5);
	float dist = distance(vtexCoord, center);
	if (classic) {
		if (dist <= 0.2) fragColor = RED;
		else fragColor = WHITE;
	} else {
		float angle1 = 3.1415/16;
		float angle2 = atan(0.5-vtexCoord.x, 0.5-vtexCoord.y);
		float modi = mod(angle2/angle1 +0.5,2);
		
		if (modi < 1 || dist <= 0.2) fragColor = RED;
		else fragColor = WHITE;
	}
}
