#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform vec4 verd = vec4(0.4,0.8,0.4,1);
uniform vec4 blanc = vec4(1,1,1,1);

void main()
{
	vec2 xy = vec2(vtexCoord.x, 3.0/4 * vtexCoord.y);
	vec2 wcirc = vec2(0.4,0.35);
	vec2 gcirc = vec2(0.6,0.35);
	float wcircDist = distance(xy,wcirc);
	float gcircDist = distance(xy,gcirc);
	
	vec2 rec = vec2(0.7,0.35);
	
	

	if (wcircDist <= 0.3 && gcircDist >= 0.3) fragColor = blanc;
	else if (distance(xy.x,rec.x) <= 0.15 && distance(xy.y,rec.y) <= 0.15) fragColor = blanc;
	else fragColor = verd;
}
