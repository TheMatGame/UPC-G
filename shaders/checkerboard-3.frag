#version 330 core

out vec4 fragColor;

in vec2 vtexCoord;

const vec4 GREY = vec4(0.8);
const vec4 BLACK = vec4(0);

uniform float n = 8;

void main()
{
	float slice = 0.5/n;
	float x = mod(vtexCoord.x/slice, 2);
  	float y = mod(vtexCoord.y/slice, 2);
	if (x > 0.2 && y > 0.2) fragColor = GREY;
	else fragColor = BLACK;
}
