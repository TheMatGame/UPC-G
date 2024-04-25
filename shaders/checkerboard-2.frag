#version 330 core

out vec4 fragColor;

in vec2 vtexCoord;
uniform float n = 8;

const vec4 GREY = vec4(0.8);
const vec4 BLACK = vec4(0);

void main()
{
	float slice = 1.0/n;
	int x = int(mod(vtexCoord.x/slice, 2));
  	int y = int(mod(vtexCoord.y/slice, 2));
	if (x == y) fragColor = GREY;
	else fragColor = BLACK;
}
