#version 330 core

in vec4 frontColor;
out vec4 fragColor;

in vec2 vtexCoord;

const vec4 RED = vec4(1,0,0,1);
const vec4 WHITE = vec4(1,1,1,1);

uniform bool anti = false;

void main()
{	
	vec2 center = vec2(0.5,0.5);
	float dist = distance(vtexCoord, center);
	
	if (dist <= 0.2) fragColor = RED;
	else fragColor = WHITE;
}
